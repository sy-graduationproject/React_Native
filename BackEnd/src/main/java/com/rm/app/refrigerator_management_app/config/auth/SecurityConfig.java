package com.rm.app.refrigerator_management_app.config.auth;

import com.rm.app.refrigerator_management_app.domain.user.Role;
import lombok.RequiredArgsConstructor;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@RequiredArgsConstructor
@EnableWebSecurity // spring security 설정들 활성
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    private final CustomOAuth2UserService customOAuth2UserService;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable().headers().frameOptions().disable() // h2-console 화면을 위한 옵션들 disable
                .and()
                    .authorizeRequests() // URL별 권한 관리를 설정 시작점
                    .antMatchers("/", "/css/**", "/images/**", "/js/**", "/h2-console/**").permitAll() // 전체 열람 권한 허용
                    .antMatchers("/api/v1/**").hasRole(Role.USER.name()) // USER 권한을 가진 사람만 허용
                    .anyRequest().authenticated() // 설정값 이외 URL은 로그인한 사용자만 허용
                .and()
                    .logout()
                        .logoutSuccessUrl("/") // 로그아웃 성공시 / 주소로 이동
                .and()
                    .oauth2Login()
                        .userInfoEndpoint() // 로그인 기능의 설정 시작점
                            .userService(customOAuth2UserService); // 로그인 성공시 진행할 인터페이스의 구현체를 등록(사용자 정보를 가져온 상태에서 추가로 진행하고자 하는 기능)
    }
}
