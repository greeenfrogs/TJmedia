package com.example.GreenFrogTable.service;

import com.example.GreenFrogTable.entity.Board;
import com.example.GreenFrogTable.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class BoardService {

    @Autowired
    private BoardRepository boardRepository;

    public Page<Board> getBoards(int page) {
        return boardRepository.findAll(PageRequest.of(page, 10));
    }

    public Optional<Board> getBoard(Long id) {
        return boardRepository.findById(id);
    }

    public Board createBoard(Board board) {
        board.setCreatedDate(LocalDateTime.now());
        board.setModifiedDate(LocalDateTime.now());
        return boardRepository.save(board);
    }

    public Board updateBoard(Long id, Board boardDetails) {
        Board board = boardRepository.findById(id).orElseThrow(() -> new RuntimeException("Board not found"));
        board.setTitle(boardDetails.getTitle());
        board.setContent(boardDetails.getContent());
        board.setModifiedDate(LocalDateTime.now());
        return boardRepository.save(board);
    }

    public void deleteBoard(Long id) {
        boardRepository.deleteById(id);
    }
}