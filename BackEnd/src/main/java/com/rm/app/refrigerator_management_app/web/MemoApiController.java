package com.rm.app.refrigerator_management_app.web;

import com.rm.app.refrigerator_management_app.service.memo.MemoService;
import com.rm.app.refrigerator_management_app.web.dto.MemoSaveRequestDto;
import com.rm.app.refrigerator_management_app.web.dto.MemoUpdateRequestDto;
import com.rm.app.refrigerator_management_app.web.dto.MemoResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
public class MemoApiController {

    private final MemoService memoService;

    @PostMapping("/api/memo")
    public Long save(@RequestBody MemoSaveRequestDto requestDto) {
        return memoService.save(requestDto);
    }

    @PutMapping("/api/memo/{id}")
    public Long update(@PathVariable Long id, @RequestBody MemoUpdateRequestDto requestDto) {
        return memoService.update(id, requestDto);
    }

    @GetMapping("/api/memo/{id}")
    public MemoResponseDto findById (@PathVariable Long id) {
        return memoService.findById(id);
    }
}
