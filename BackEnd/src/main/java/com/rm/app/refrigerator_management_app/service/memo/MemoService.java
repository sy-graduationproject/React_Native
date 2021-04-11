package com.rm.app.refrigerator_management_app.service.memo;

import com.rm.app.refrigerator_management_app.domain.memo.Memo;
import com.rm.app.refrigerator_management_app.domain.memo.MemoRepository;
import com.rm.app.refrigerator_management_app.web.dto.MemoListResponseDto;
import com.rm.app.refrigerator_management_app.web.dto.MemoResponseDto;
import com.rm.app.refrigerator_management_app.web.dto.MemoSaveRequestDto;
import com.rm.app.refrigerator_management_app.web.dto.MemoUpdateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class MemoService {
    private final MemoRepository memoRepository;

    @Transactional // db에 접근해서 바꿔야할 때 사용
    public Long save(MemoSaveRequestDto requestDto) {
        return memoRepository.save(requestDto.toEntity()).getId();
    }

    @Transactional // db에 접근해서 바꿔야할 때 사
    public Long update(Long id, MemoUpdateRequestDto requestDto) {
        Memo memo = memoRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id="+ id));

        memo.update(requestDto.getContent()); // memoRepository.update 같은 건 없기 때문에 Memo에다 update하는 함수를 작성해서 사용
        // 트랜잭션 안에서 데이터베이스에서 데이터를 가져오면 영속성 컨텍스트가 유지된 상태이다.
        // 이때 해당 데이터 값을 변경하면 트랙잭션이 끝나는 시점에 변경된 내용을 반영한다.
        // 따라서 update쿼리를 날릴 필요가 없다.

        return id;
    }

    @Transactional(readOnly = true)
    public List<MemoListResponseDto> findAllDesc() {
        return memoRepository.findAllDesc().stream()
                .map(MemoListResponseDto::new)
                .collect(Collectors.toList());
    }

    public MemoResponseDto findById(Long id) { // db 데이터를 변경하지 않으므로 Transactional 어노테이션을 사용하지 않음
        Memo memo = memoRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id="+ id));

        return new MemoResponseDto(memo);
    }
}
