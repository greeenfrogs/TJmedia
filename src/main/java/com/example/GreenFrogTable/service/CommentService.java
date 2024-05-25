package com.example.GreenFrogTable.service;

import com.example.GreenFrogTable.entity.Comment;
import com.example.GreenFrogTable.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class CommentService {

    @Autowired
    private CommentRepository commentRepository;

    public List<Comment> getCommentsByBoardId(Long boardId) {
        return commentRepository.findByBoardId(boardId);
    }

    public Comment createComment(Comment comment) {
        comment.setCreatedDate(LocalDateTime.now());
        return commentRepository.save(comment);
    }

    public void deleteComment(Long id) {
        commentRepository.deleteById(id);
    }
}