package com.example.demo.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotEmpty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Entity

@Table(name = "numerorifa")
public class NumeroRifa {

    @Id
    private Long numero;

    @NotEmpty(message = "O nome de usuário é obrigatório")
    private String nome;

    private String telefone;
    private String valor;
}