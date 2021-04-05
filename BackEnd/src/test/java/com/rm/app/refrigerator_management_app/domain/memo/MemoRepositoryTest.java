package com.rm.app.refrigerator_management_app.domain.memo;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.assertj.core.api.Assertions.assertThat;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@ExtendWith(SpringExtension.class)
@SpringBootTest // H2 데이터베이스를 자동으로 실행
public class MemoRepositoryTest {

    @Autowired
    MemoRepository memoRepository;

    @AfterEach
    public void cleanup() {
        memoRepository.deleteAll();
    }

    @Test
    public void 메모_불러오기() {
        // given
        String content = "테스트 메모";

        memoRepository.save(Memo.builder() // id값(기본키)이 있다면 update, 없다면 insert 쿼리가 실행된다.
        .content(content)
        .author("soosungp33@gmail.com")
        .build());

        // when
        List<Memo> memoList = memoRepository.findAll(); // 테이블에 있는 모든 데이터를 조회

        // then
        Memo memo = memoList.get(0); // 1개만 넣었으므로 첫 번째만 가져옴
        assertThat(memo.getContent()).isEqualTo(content);
    }

    @Test
    public void BaseTimeEntity_등록() {
        //given
        LocalDateTime now = LocalDateTime.of(2019, 6, 4, 0, 0, 0);
        memoRepository.save(Memo.builder()
        .content("content")
        .author("author")
        .build());

        //when
        List<Memo> memoList = memoRepository.findAll();

        //then
        Memo memo = memoList.get(0);

        assertThat(memo.getCreatedDate()).isAfter(now);
        assertThat(memo.getModifiedDate()).isAfter(now);
    }
}
