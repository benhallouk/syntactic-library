package com.syntactic;


import com.syntactic.controllers.HomeController;
import com.syntactic.models.LibraryItem;
import com.syntactic.services.LibraryItemService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.runners.MockitoJUnitRunner;
import org.springframework.boot.test.SpringApplicationConfiguration;

import java.util.Arrays;
import java.util.List;

import static junit.framework.TestCase.assertTrue;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
@SpringApplicationConfiguration(App.class)
public class AppTest
{
    @Mock
    private LibraryItemService libraryItemService;


    @InjectMocks
    private HomeController homeController;

    @Test
    public void HomeController_Index_Should_Return_All_Data()
    {
        LibraryItem libraryItem = Mockito.mock(LibraryItem.class);
        List<LibraryItem> allLibraryItems = Arrays.asList(libraryItem);

        when(libraryItemService.GetAll()).thenReturn(allLibraryItems);

        assertTrue( homeController.Index().equals(allLibraryItems));
    }

    @Test
    public void HomeController_Add_Should_Add_Item()
    {
        LibraryItem libraryItem = Mockito.mock(LibraryItem.class);


        Mockito.when(libraryItemService.Add(libraryItem)).thenReturn(libraryItem);

        homeController.Add(libraryItem);

        verify(libraryItemService).Add(libraryItem);

        assertTrue(homeController.Add(libraryItem).equals(libraryItem));
    }
}
