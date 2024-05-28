package com.example.GreenFrogTable.repository;

import com.example.GreenFrogTable.entity.RequestBoard;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RequestBoardRepository extends JpaRepository<RequestBoard, Long> {
    List<RequestBoard> findByClientContaining(String client);
    List<RequestBoard> findByTitleContaining(String title);
}
