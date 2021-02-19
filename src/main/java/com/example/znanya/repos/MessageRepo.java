package com.example.znanya.repos;

import com.example.znanya.domain.Message;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface MessageRepo extends CrudRepository<Message, Long> {

    List<Message> findByTag(String tag);
    List<Message> findByAuthor(String name);

    List<Message> deleteMessageByAuthor(String name);

    @Query(value = "SELECT * FROM message ORDER BY ID DESC LIMIT 5", nativeQuery = true)
    List<Message> getLast();
}
