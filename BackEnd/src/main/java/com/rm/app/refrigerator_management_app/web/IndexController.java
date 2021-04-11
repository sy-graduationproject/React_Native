package com.rm.app.refrigerator_management_app.web;

import com.rm.app.refrigerator_management_app.config.auth.LoginUser;
import com.rm.app.refrigerator_management_app.config.auth.dto.SessionUser;
import com.rm.app.refrigerator_management_app.service.memo.MemoService;
import com.rm.app.refrigerator_management_app.web.dto.MemoResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import javax.servlet.http.HttpSession;

@RequiredArgsConstructor
@Controller
public class IndexController {
    private final MemoService memoService;
    private final HttpSession httpSession;

    @GetMapping("/")
    public String index(Model model, @LoginUser SessionUser user) { // Model에 서버 템플릿 엔진에서 사용할 수 있는 객체를 저장
        // 게시판 기능
        model.addAttribute("posts", memoService.findAllDesc()); // findAllDesc로 가져온 결과를 posts로 index.mustache에 전달

        // 로그인 기능
        // 머시테치 코드에 의해 userName에 값이 없으면 로그인 버튼이 보인다.
        if(user!=null) {
            model.addAttribute("userName", user.getName());
        }

        return "index"; // src/main/resources/templates/index.mustache 로 전환되어 처리
    }

    @GetMapping("/posts/save")
    public String postsSave() {
        return "posts-save";
    }

    @GetMapping("/posts/update/{id}")
    public String postsUpdate(@PathVariable Long id, Model model) {
        MemoResponseDto dto = memoService.findById(id);
        model.addAttribute("post", dto);

        return "posts-update";
    }
}
