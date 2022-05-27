package com.voluntary.projeto.service;

import com.voluntary.projeto.entity.Oportunidade;
import com.voluntary.projeto.entity.Voluntario;
import com.voluntary.projeto.repository.OportunidadeRepository;
import com.voluntary.projeto.repository.VoluntarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class VoluntarioService {

    @Autowired
    VoluntarioRepository voluntarioRepository;

    public List<Voluntario> list() {
        return voluntarioRepository.findAll();
    }

    public Optional<Voluntario> getOne(Long id) {
        return voluntarioRepository.findById(id);
    }

    public Optional<Voluntario> getByNome(String nome) {
        return voluntarioRepository.findByNome(nome);
    }

    public void save(Voluntario voluntario) {
        voluntarioRepository.save(voluntario);
    }

    public void delete(Long id) {
        voluntarioRepository.deleteById(id);
    }

    public boolean existsById(Long id) {
        return voluntarioRepository.existsById(id);
    }

    public boolean existsByNome(String nome) {
        return voluntarioRepository.existsByNome(nome);
    }
}
