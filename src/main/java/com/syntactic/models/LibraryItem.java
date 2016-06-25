package com.syntactic.models;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
public class LibraryItem
{
    @Id
    private Long id;
    private String title;
    private String author;
    private String category;
    private String article;
}