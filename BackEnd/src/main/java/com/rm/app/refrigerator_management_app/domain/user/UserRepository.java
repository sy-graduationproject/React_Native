package com.rm.app.refrigerator_management_app.domain.user;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email); // email을 통해 이미 생성된 사용자인지 아닌지 판단하기 위한 메소드
}
