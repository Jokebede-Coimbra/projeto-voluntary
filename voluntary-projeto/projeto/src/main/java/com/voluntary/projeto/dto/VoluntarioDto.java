package com.voluntary.projeto.dto;

import javax.validation.constraints.NotBlank;

public class VoluntarioDto {
    @NotBlank
    private String nome;
    @NotBlank
    private String email;
    @NotBlank
    private String cpf;
    @NotBlank
    private String telefone;

    public VoluntarioDto() {
    }

    public VoluntarioDto(String nome, String email, String cpf, String telefone) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }
}

