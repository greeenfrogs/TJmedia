package com.example.GreenFrogTable.controller;

import com.example.GreenFrogTable.dto.RequestBoardDTO;
import com.example.GreenFrogTable.entity.RequestBoard;
import com.example.GreenFrogTable.service.RequestBoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/request")
public class RequestBoardController {

    @Autowired
    private RequestBoardService requestBoardService;

    @GetMapping
    public List<RequestBoard> getAllPosts(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size) {
        return requestBoardService.getAllPosts(page, size);
    }

    @GetMapping("/{id}")
    public RequestBoard getPostById(@PathVariable Long id) {
        return requestBoardService.getPostById(id);
    }

    @PostMapping
    public RequestBoard createPost(@RequestBody RequestBoardDTO postDTO) {
        RequestBoard post = new RequestBoard();
        post.setTitle(postDTO.getTitle());
        post.setContent(postDTO.getContent());
        post.setClient(postDTO.getClient());
        post.setPrice(postDTO.getPrice());
        post.setRequestType(postDTO.getRequestType());
        post.setIsOngoing(postDTO.getIsOngoing());
        return requestBoardService.createPost(post);
    }

    @PutMapping("/{id}")
    public RequestBoard updatePost(@PathVariable Long id, @RequestBody RequestBoardDTO postDTO) {
        RequestBoard post = requestBoardService.getPostById(id);
        if (post != null) {
            post.setTitle(postDTO.getTitle());
            post.setContent(postDTO.getContent());
            post.setClient(postDTO.getClient());
            post.setPrice(postDTO.getPrice());
            post.setRequestType(postDTO.getRequestType());
            post.setIsOngoing(postDTO.getIsOngoing());
            return requestBoardService.updatePost(id, post);
        } else {
            return null;
        }
    }

    @DeleteMapping("/{id}")
    public void deletePost(@PathVariable Long id) {
        requestBoardService.deletePost(id);
    }

    @GetMapping("/search/client")
    public List<RequestBoard> searchByClient(@RequestParam String client) {
        return requestBoardService.searchByClient(client);
    }

    @GetMapping("/search/title")
    public List<RequestBoard> searchByTitle(@RequestParam String title) {
        return requestBoardService.searchByTitle(title);
    }
}
