package com.rm.app.refrigerator_management_app.domain.memo;

import com.rm.app.refrigerator_management_app.domain.BaseTimeEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter // get메소드를 자동으로 생성
@NoArgsConstructor
@Entity // JPA 어노테이션(테이블과 링크될 클래스를 나타낸다.)
public class Memo extends BaseTimeEntity {

    @Id // PK
    @GeneratedValue(strategy = GenerationType.IDENTITY) // PK 생성 규
    private Long id;

    @Column(length = 500, nullable = false) // 기본값 외에 추가로 변경이 필요한 옵션이 있으면 사용(선언하지 않아도 모두 칼럼이 된다.)
    private String title;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String content;

    private String author;

    @Builder // 생성자에 포함된 필드만 빌더에 포함(생성자와 같은 기능) -> 생성자를 통해 최종값을 채우고 DB에 삽입
    public Memo(String title, String content, String author) {
        this.title = title;
        this.content = content;
        this.author = author;
    }

    public void update(String title, String content) {
        this.title = title;
        this.content = content;
    }
}
