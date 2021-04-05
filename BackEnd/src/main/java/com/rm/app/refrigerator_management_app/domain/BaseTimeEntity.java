package com.rm.app.refrigerator_management_app.domain;

import lombok.Getter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import java.time.LocalDateTime;

@Getter
@MappedSuperclass // JPA Entity 클래스들이 BaseTimeEntity를 상속할 경우 아래 필드를 칼럼으로 인
@EntityListeners(AuditingEntityListener.class)
public abstract class BaseTimeEntity {
    @CreatedDate // 생성될 때 시간을 자동 저장
    private LocalDateTime createdDate;

    @LastModifiedDate // 값이 변경될 때 시간을 자동 저장
    private LocalDateTime modifiedDate;
}
