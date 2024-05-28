package com.example.GreenFrogTable.service;

import com.example.GreenFrogTable.entity.RequestBoard;
import com.example.GreenFrogTable.repository.RequestBoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class RequestBoardService {

    @Autowired
    private RequestBoardRepository requestBoardRepository;

    public List<RequestBoard> getAllPosts(int page, int size) {
        return requestBoardRepository.findAll(PageRequest.of(page, size)).getContent();
    }

    public RequestBoard getPostById(Long id) {
        return requestBoardRepository.findById(id).orElse(null);
    }

    public RequestBoard createPost(RequestBoard post) {
        post.setCreatedDate(LocalDateTime.now());
        post.setModifiedDate(LocalDateTime.now());
        return requestBoardRepository.save(post);
    }

    public RequestBoard updatePost(Long id, RequestBoard post) {
        RequestBoard existingPost = requestBoardRepository.findById(id).orElse(null);
        if (existingPost != null) {
            existingPost.setTitle(post.getTitle());
            existingPost.setContent(post.getContent());
            existingPost.setClient(post.getClient());
            existingPost.setPrice(post.getPrice());
            existingPost.setRequestType(post.getRequestType());
            existingPost.setIsOngoing(post.getIsOngoing());
            existingPost.setModifiedDate(LocalDateTime.now());
            return requestBoardRepository.save(existingPost);
        } else {
            return null;
        }
    }

    public void deletePost(Long id) {
        requestBoardRepository.deleteById(id);
    }

    public List<RequestBoard> searchByClient(String client) {
        return requestBoardRepository.findByClientContaining(client);
    }

    public List<RequestBoard> searchByTitle(String title) {
        return requestBoardRepository.findByTitleContaining(title);
    }
}
