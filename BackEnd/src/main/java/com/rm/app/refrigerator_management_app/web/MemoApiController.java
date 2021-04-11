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

    @PostMapping("/api/v1/memo")
    public Long save(@RequestBody MemoSaveRequestDto requestDto) {
        return memoService.save(requestDto);
    }

    @PutMapping("/api/v1/memo/{id}")
    public Long update(@PathVariable Long id, @RequestBody MemoUpdateRequestDto requestDto) {
        return memoService.update(id, requestDto);
    }

    @GetMapping("/api/v1/memo/{id}")
    public MemoResponseDto findById (@PathVariable Long id) {
        return memoService.findById(id);
    }

    @DeleteMapping("/api/v1/memo/{id}")
    public Long delete(@PathVariable Long id) {
        memoService.delete(id);
        return id;
    }
}
