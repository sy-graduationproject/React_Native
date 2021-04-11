package com.rm.app.refrigerator_management_app.web.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class MemoUpdateRequestDto {
    private String content;

    @Builder
    public MemoUpdateRequestDto(String content) { // 테스트할 때 쓰는 듯?
        this.content = content;
    }
}
