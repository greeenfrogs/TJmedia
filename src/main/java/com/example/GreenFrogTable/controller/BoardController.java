package com.example.GreenFrogTable.controller;

import com.example.GreenFrogTable.entity.Board;
import com.example.GreenFrogTable.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Controller
@RequestMapping("/boards")
public class BoardController {

    @Autowired
    private BoardService boardService;

    @GetMapping
    public String getBoards(@RequestParam(defaultValue = "0") int page, Model model) {
        model.addAttribute("boards", boardService.getBoards(page).getContent());
        return "boards";
    }

    @GetMapping("/{id}")
    public String getBoard(@PathVariable Long id, Model model) {
        Optional<Board> board = boardService.getBoard(id);
        if (board.isPresent()) {
            model.addAttribute("board", board.get());
            return "board";
        } else {
            return "redirect:/boards";
        }
    }

    @GetMapping("/new")
    public String newBoardForm(Model model) {
        model.addAttribute("board", new Board());
        return "new-board";
    }

    @PostMapping
    public String createBoard(@ModelAttribute Board board) {
        boardService.createBoard(board);
        return "redirect:/boards";
    }

    @GetMapping("/{id}/edit")
    public String editBoardForm(@PathVariable Long id, Model model) {
        Optional<Board> board = boardService.getBoard(id);
        if (board.isPresent()) {
            model.addAttribute("board", board.get());
            return "new-board";
        } else {
            return "redirect:/boards";
        }
    }

    @PostMapping("/{id}/edit")
    public String updateBoard(@PathVariable Long id, @ModelAttribute Board boardDetails) {
        boardService.updateBoard(id, boardDetails);
        return "redirect:/boards";
    }

    @PostMapping("/{id}/delete")
    public String deleteBoard(@PathVariable Long id) {
        boardService.deleteBoard(id);
        return "redirect:/boards";
    }
}