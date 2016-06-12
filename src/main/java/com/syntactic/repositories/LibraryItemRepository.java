package com.syntactic.repositories;

import com.syntactic.models.LibraryItem;

import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface LibraryItemRepository extends CrudRepository<LibraryItem,Long>
{
    List<LibraryItem> findAll();
}
