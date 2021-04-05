package com.rm.app.refrigerator_management_app.web.dto;

import com.rm.app.refrigerator_management_app.domain.memo.Memo;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class MemoSaveRequestDto {
    private String content;
    private String author;

    @Builder
    public MemoSaveRequestDto(String content, String author) { // 테스트할 때 쓰는 듯?
        this.content = content;
        this.author = author;
    }

    public Memo toEntity() {
        return Memo.builder()
                .content(content)
                .author(author)
                .build();
    }
}
