package com.example.GreenFrogTable.controller;

import com.example.GreenFrogTable.entity.Comment;
import com.example.GreenFrogTable.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/comments")
public class CommentController {

    @Autowired
    private CommentService commentService;

    @PostMapping
    public String createComment(@ModelAttribute Comment comment) {
        commentService.createComment(comment);
        return "redirect:/boards/" + comment.getBoard().getId();
    }
}