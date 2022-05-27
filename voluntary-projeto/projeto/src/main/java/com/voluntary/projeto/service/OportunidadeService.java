package com.voluntary.projeto.service;

import com.voluntary.projeto.entity.Oportunidade;
import com.voluntary.projeto.repository.OportunidadeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class OportunidadeService {

    @Autowired
    OportunidadeRepository oportunidadeRepository;

    public List<Oportunidade> list() {
        return oportunidadeRepository.findAll();
    }

    public Optional<Oportunidade> getOne(Long id) {
        return oportunidadeRepository.findById(id);
    }

    public Optional<Oportunidade> getByNome(String nome) {
        return oportunidadeRepository.findByNome(nome);
    }

    public void save(Oportunidade oportunidade) {
        oportunidadeRepository.save(oportunidade);
    }

    public void delete(Long id) {
        oportunidadeRepository.deleteById(id);
    }

    public boolean existsById(Long id) {
        return oportunidadeRepository.existsById(id);
    }

    public boolean existsByNome(String nome) {
        return oportunidadeRepository.existsByNome(nome);
    }
}
