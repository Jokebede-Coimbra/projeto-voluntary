package com.voluntary.projeto.controller;

import com.voluntary.projeto.dto.Mensagem;
import com.voluntary.projeto.dto.VoluntarioDto;
import com.voluntary.projeto.entity.Voluntario;
import com.voluntary.projeto.service.VoluntarioService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/voluntario") //colocar parte do endereço da  aplicação
public class VoluntarioController {

    @Autowired
    VoluntarioService voluntarioService;

    @GetMapping("/lista")
    public ResponseEntity<List<Voluntario>> list() {
        List<Voluntario> list = voluntarioService.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody VoluntarioDto voluntarioDto) {
        if (StringUtils.isBlank(voluntarioDto.getNome()))
            return new ResponseEntity(new Mensagem("O nome é obrigatório"), HttpStatus.BAD_REQUEST);
        if (voluntarioService.existsByNome(voluntarioDto.getNome()))
            return new ResponseEntity(new Mensagem("Esse nome já existe"), HttpStatus.BAD_REQUEST);
        Voluntario voluntario = new Voluntario(voluntarioDto.getNome(), voluntarioDto.getEmail(), voluntarioDto.getCpf(), voluntarioDto.getTelefone());
        voluntarioService.save(voluntario);
        return new ResponseEntity(new Mensagem("Cadastro criado"), HttpStatus.OK);

    }

}
