package com.project.seiapp.jwt;


import java.util.*;

import javax.management.relation.Role;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.project.seiapp.repository.UserDao;
import com.project.seiapp.repository.UserRoleRepository;
import com.project.seiapp.entità.DAOUser;
import com.project.seiapp.entità.UserRole;
import com.project.seiapp.dto.UserDTO;

//@Service 
@Service(value = "userService") //Basato sui ruoli se ci servono, altrimenti basta fare solo un token che non possiede nessun tipo
public class JwtUserDetailsService implements UserDetailsService {
	
	@Autowired
	private UserDao userDao;

	@Autowired
	private UserRoleRepository userRoleRepository;

	@Autowired
	private PasswordEncoder bcryptEncoder;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		DAOUser user = userDao.findByUsername(username);
		if (user == null) {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
		org.springframework.security.core.userdetails.User u = new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), getAuthority(user));
		return u;
	}

	public DAOUser findUserByUsername(String username){
		return userDao.findByUsername(username);
	}
	//Per dare un ruolo agli utenti registrati nel db
	private Set<GrantedAuthority> getAuthority(DAOUser user) { //Prende i ruoli
        Set<GrantedAuthority> authorities = new HashSet<>();
		user.getRoles().forEach(role -> {
            authorities.add(new SimpleGrantedAuthority("ROLE_" + role.getName()));
		});
		return authorities;
	}

	public List findAll() {
		List list = new ArrayList<>();
		userDao.findAll().iterator().forEachRemaining(list::add);
		return list;
	}

	public DAOUser save(UserDTO user) {
		DAOUser newUser = new DAOUser();
		newUser.setUsername(user.getUsername());
		newUser.setemail(user.getemail());
		newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
		DAOUser saved = userDao.save(newUser);

		UserRole newUserRole = new UserRole();
		newUserRole.setRole_id(1);
		newUserRole.setUser_id(saved.getId());
		userRoleRepository.save(newUserRole);
		return saved;
	}
}