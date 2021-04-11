package com.rm.app.refrigerator_management_app.web.dto;

import com.rm.app.refrigerator_management_app.domain.memo.Memo;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class MemoListResponseDto {
    private Long id;
    private String title;
    private String author;
    private LocalDateTime modifiedDate;

    public MemoListResponseDto(Memo entity) {
        this.id = entity.getId();
        this.title = entity.getTitle();
        this.author = entity.getAuthor();
        this.modifiedDate = entity.getModifiedDate();
    }
}
