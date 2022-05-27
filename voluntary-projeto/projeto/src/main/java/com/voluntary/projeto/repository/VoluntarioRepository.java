package com.voluntary.projeto.repository;

import com.voluntary.projeto.entity.Voluntario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface VoluntarioRepository extends JpaRepository<Voluntario, Long> {

    Optional<Voluntario> findByNome(String nome);
    boolean existsByNome(String nome);
}
