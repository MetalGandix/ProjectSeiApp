package com.project.seiapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.project.seiapp.entità.UserRole;

@Repository
public interface UserRoleRepository extends JpaRepository<UserRole, Integer> {

}