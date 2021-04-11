package com.rm.app.refrigerator_management_app.domain.memo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

// JpaRepository<Entity 클래스, PK 타입>을 상속하면 기본적인 CRUD 메소드가 자동으로 생성된다.
// Entity 클래스와 같은 패키지에 위치해야한다.
public interface MemoRepository extends JpaRepository<Memo, Long> {
    @Query("SELECT m FROM Memo m ORDER BY m.id DESC")
    List<Memo> findAllDesc();
}
