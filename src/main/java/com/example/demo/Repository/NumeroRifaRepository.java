package com.example.demo.Repository;
import com.example.demo.Models.NumeroRifa;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface NumeroRifaRepository extends CrudRepository <NumeroRifa, Long> {

    NumeroRifa findByNumero(Long numero);

    List<NumeroRifa> findAll();

    @Query("SELECT n FROM NumeroRifa n WHERE n.nome LIKE %:nome%")
    List<NumeroRifa> findByNomeFilter(String nome);


}