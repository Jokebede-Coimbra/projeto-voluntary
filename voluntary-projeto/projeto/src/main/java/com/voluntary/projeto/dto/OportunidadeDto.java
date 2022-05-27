package com.voluntary.projeto.dto;
import javax.validation.constraints.NotBlank;

public class OportunidadeDto {

    @NotBlank
    private String nome;
    @NotBlank
    private String associacao;
    @NotBlank
    private String descricao;
    @NotBlank
    private String endereco;

    public OportunidadeDto() {
    }

    public OportunidadeDto(String nome, String associacao, String descricao, String endereco) {
        this.nome = nome;
        this.associacao = associacao;
        this.descricao = descricao;
        this.endereco = endereco;
    }

    public String getNome() {
        return nome;
    }

    public void setName(String nome) {
        this.nome = nome;
    }

    public String getAssociacao() {
        return associacao;
    }

    public void setAssociacao(String associacao) {
        this.associacao = associacao;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }
}

