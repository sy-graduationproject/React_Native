package com.rm.app.refrigerator_management_app.web;

import com.rm.app.refrigerator_management_app.service.memo.MemoService;
import com.rm.app.refrigerator_management_app.web.dto.MemoResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RequiredArgsConstructor
@Controller
public class IndexController {
    private final MemoService memoService;

    @GetMapping("/")
    public String index(Model model) {
        model.addAttribute("memo", memoService.findAllDesc());
        return "index"; // index 페이지로
    }

    @GetMapping("/memo/update/{id}")
    public String memoUpdate(@PathVariable Long id, Model model) {
        MemoResponseDto dto = memoService.findById(id);
        model.addAttribute("memo", dto);
        return "memo-update"; // memo-update 페이지로
    }
}
