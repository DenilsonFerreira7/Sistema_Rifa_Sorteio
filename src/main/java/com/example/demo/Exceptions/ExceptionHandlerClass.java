package com.example.demo.Exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ExceptionHandlerClass {
    @ExceptionHandler(NotFoundExeption.class)
    public ResponseEntity<String> handleNotFoundException(NotFoundExeption ex) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("NÃO ENCONTRADO: " +ex.getMessage());
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleGenericException(Exception ex) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro interno: VERIFIQUE SE HÁ ALGUM CAMPO QUE NÃO FOI PREENCHIDO CORRETAMENTE:  "
                + ex.getMessage());
    }

}