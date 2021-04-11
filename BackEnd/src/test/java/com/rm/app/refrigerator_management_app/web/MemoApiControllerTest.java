package com.rm.app.refrigerator_management_app.web;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.rm.app.refrigerator_management_app.domain.memo.Memo;
import com.rm.app.refrigerator_management_app.domain.memo.MemoRepository;
import com.rm.app.refrigerator_management_app.web.dto.MemoSaveRequestDto;
import com.rm.app.refrigerator_management_app.web.dto.MemoUpdateRequestDto;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.security.test.web.servlet.setup.SecurityMockMvcConfigurers.springSecurity;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(SpringExtension.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class MemoApiControllerTest {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private MemoRepository memoRepository;

    @AfterEach
    public void tearDown() throws Exception {
        memoRepository.deleteAll();
    }

    // 로그인 시큐리티 설정
    @Autowired
    private WebApplicationContext context;
    private MockMvc mvc; // 가짜 사용자를 사용하기 위해
    @BeforeEach
    public void setup() {
        mvc = MockMvcBuilders
                .webAppContextSetup(context)
                .apply(springSecurity())
                .build();
    }

    @Test
    @WithMockUser(roles="USER") // 가짜 사용자를 만들어서 사용
    public void Memo_등록() throws Exception {
        //given
        String title = "title";
        String content = "content";
        MemoSaveRequestDto requestDto = MemoSaveRequestDto.builder()
                .title(title)
                .content(content)
                .author("author")
                .build();

        String url = "http://localhost:" + port + "/api/v1/memo";

        //when
        /* 시큐리티 적용 전
        ResponseEntity<Long> responseEntity = restTemplate.postForEntity(url, requestDto, Long.class);
        */
        mvc.perform(post(url)
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .contentType(new ObjectMapper().writeValueAsString(requestDto)))
                .andExpect(status().isOk());

        //then
        /* 시큐리티 적용 전
        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(responseEntity.getBody()).isGreaterThan(0L);
        */
        List<Memo> all = memoRepository.findAll();
        assertThat(all.get(0).getTitle()).isEqualTo(title);
        assertThat(all.get(0).getContent()).isEqualTo(content);
    }

    @Test
    @WithMockUser(roles="USER")
    public void Memo_수정() throws Exception {
        //given
        Memo savedMemo = memoRepository.save(Memo.builder()
                .title("title")
                .content("content")
                .author("author")
                .build());

        Long updateId = savedMemo.getId();
        String updateTitle = "title2";
        String updateContent = "content2";

        MemoUpdateRequestDto requestDto = MemoUpdateRequestDto.builder()
                .title(updateTitle)
                .content(updateContent)
                .build();

        String url = "http://localhost:" + port + "/api/v1/memo/"+ updateId;

        HttpEntity<MemoUpdateRequestDto> requestEntity = new HttpEntity<>(requestDto);

        //when
        /* 시큐리티 적용 전
        ResponseEntity<Long> responseEntity = restTemplate.exchange(url, HttpMethod.PUT, requestEntity, Long.class);
        */
        mvc.perform(put(url)
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .contentType(new ObjectMapper().writeValueAsString(requestDto)))
                .andExpect(status().isOk());

        //then
        /* 시큐리티 적용 전
        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(responseEntity.getBody()).isGreaterThan(0L);
        */

        List<Memo> all = memoRepository.findAll();
        assertThat(all.get(0).getTitle()).isEqualTo(updateTitle);
        assertThat(all.get(0).getContent()).isEqualTo(updateContent);
    }
}
