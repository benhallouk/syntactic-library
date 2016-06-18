package com.syntactic.controllers;

import com.syntactic.models.LibraryItem;
import com.syntactic.services.LibraryItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
public class HomeController
{
    @Autowired
    LibraryItemService libraryItemService;

    @RequestMapping(value = "/items", method = RequestMethod.GET)
    public List<LibraryItem> Index()
    {
        return libraryItemService.GetAll();
    }

    @RequestMapping(value ="/item", method = RequestMethod.PUT)
    public LibraryItem Add(@RequestBody LibraryItem item){
        return libraryItemService.Add(item);
    }
}
