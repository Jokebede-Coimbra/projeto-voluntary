package com.voluntary.projeto.controller;

import com.voluntary.projeto.dto.Mensagem;
import com.voluntary.projeto.dto.OportunidadeDto;
import com.voluntary.projeto.entity.Oportunidade;
import com.voluntary.projeto.service.OportunidadeService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/oportunidade") //colocar parte do endereço da  aplicação
public class OportunidadeController {

    @Autowired
    OportunidadeService oportunidadeService;

    @GetMapping("/lista")
    public ResponseEntity<List<Oportunidade>> list() {
        List<Oportunidade> list = oportunidadeService.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }

    @GetMapping("/detail/{id}")
    public ResponseEntity<Oportunidade> getById(@PathVariable("id") Long id) {
        if (!oportunidadeService.existsById(id))
            return new ResponseEntity(new Mensagem("Não existe"), HttpStatus.NOT_FOUND);
        Oportunidade oportunidade = oportunidadeService.getOne(id).get();
        return new ResponseEntity(oportunidade, HttpStatus.OK);
    }

    @GetMapping("/detailname/{nome}")
    public ResponseEntity<Oportunidade> getByNome(@PathVariable("nome") String nome) {
        if (!oportunidadeService.existsByNome(nome))
            return new ResponseEntity(new Mensagem("Não existe"), HttpStatus.NOT_FOUND);
        Oportunidade oportunidade = oportunidadeService.getByNome(nome).get();
        return new ResponseEntity(oportunidade, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody OportunidadeDto oportunidadeDto) {
        if (StringUtils.isBlank(oportunidadeDto.getNome()))
            return new ResponseEntity(new Mensagem("O nome é obrigatório"), HttpStatus.BAD_REQUEST);
        if (oportunidadeService.existsByNome(oportunidadeDto.getNome()))
            return new ResponseEntity(new Mensagem("Esse nome já existe"), HttpStatus.BAD_REQUEST);
        Oportunidade oportunidade = new Oportunidade(oportunidadeDto.getNome(), oportunidadeDto.getAssociacao(), oportunidadeDto.getDescricao(), oportunidadeDto.getEndereco());
        oportunidadeService.save(oportunidade);
        return new ResponseEntity(new Mensagem("Oportunidade criado"), HttpStatus.OK);

    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id") Long id, @RequestBody OportunidadeDto oportunidadeDto) {
        if (!oportunidadeService.existsById(id))
            return new ResponseEntity(new Mensagem("Não existe"), HttpStatus.NOT_FOUND);
        if (oportunidadeService.existsByNome(oportunidadeDto.getNome()) && oportunidadeService.getByNome(oportunidadeDto.getNome()).get().getId() != id)
            return new ResponseEntity(new Mensagem("Esse nome já existe"), HttpStatus.BAD_REQUEST);
        if (StringUtils.isBlank(oportunidadeDto.getNome()))
            return new ResponseEntity(new Mensagem("O nome é obrigatório"), HttpStatus.BAD_REQUEST);

        Oportunidade oportunidade = oportunidadeService.getOne(id).get();
        oportunidade.setNome(oportunidadeDto.getNome());
        oportunidade.setAssociacao(oportunidadeDto.getAssociacao());
        oportunidade.setDescricao(oportunidadeDto.getDescricao());
        oportunidade.setEndereco(oportunidadeDto.getEndereco());
        oportunidadeService.save(oportunidade);
        return new ResponseEntity(new Mensagem("Oportunidade atualizado"), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id) {
        if (!oportunidadeService.existsById(id))
            return new ResponseEntity(new Mensagem("Não existe"), HttpStatus.NOT_FOUND);
        oportunidadeService.delete(id);
        return new ResponseEntity(new Mensagem("Oportunidade deletada"), HttpStatus.OK);
    }
}
