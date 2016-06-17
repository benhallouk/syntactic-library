package com.syntactic.services;


import com.syntactic.models.LibraryItem;
import com.syntactic.repositories.LibraryItemRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class LibraryItemService
{
    @Autowired
    LibraryItemRepository libraryItemRepository;

    public List<LibraryItem> GetAll()
    {
        return libraryItemRepository.findAll();
    }

    public LibraryItem Add(LibraryItem item)
    {
        return libraryItemRepository.save(item);
    }
}
