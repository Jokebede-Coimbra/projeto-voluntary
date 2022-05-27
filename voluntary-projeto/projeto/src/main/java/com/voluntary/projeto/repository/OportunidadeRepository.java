package com.voluntary.projeto.repository;

import com.voluntary.projeto.entity.Oportunidade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface OportunidadeRepository extends JpaRepository<Oportunidade, Long> {

    Optional<Oportunidade> findByNome(String nome);
    boolean existsByNome(String nome);
}
