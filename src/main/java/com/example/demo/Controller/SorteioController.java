package com.example.demo.Controller;
import com.example.demo.Exceptions.NotFoundExeption;
import com.example.demo.Models.NumeroRifa;
import com.example.demo.Service.NumeroRifaService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/rifa")
public class SorteioController {
    @Autowired
    private final NumeroRifaService numeroRifaService;


    @PostMapping(value = "/cadastrar", produces = "application/json")
    public ResponseEntity<String> numeroRifa(@RequestBody NumeroRifa numeroRifa) {
        NumeroRifa cadastrar = numeroRifaService.salvarNumeroRifa(numeroRifa);
        if (cadastrar == null) {
            throw new NotFoundExeption("Erro ao cadastrar o número da rifa");
        }
        String numero = Long.toString(cadastrar.getNumero());
        return ResponseEntity.ok("Número " + numero + " cadastrado");
    }

    @DeleteMapping(value = "/deletar/{numero}")
    public ResponseEntity<String> deletarNumero(@PathVariable(value = "numero") Long numero) {
        NumeroRifa numeroRifaDeletado = numeroRifaService.deletarNumeroRifa(numero);
        String numeroRifaCadastrado = String.valueOf(numeroRifaDeletado.getNumero());
        return ResponseEntity.status(HttpStatus.OK).body("Cadastro com o Número " + numeroRifaCadastrado + " foi deletado");
    }

    @GetMapping("/numeroAleatorio")
    public NumeroRifa buscarNumeroAleatorio() {
        return numeroRifaService.buscarNumeroAleatorio();
    }

    @GetMapping(value = "/consultar/{numero}", produces = "application/json")
    public ResponseEntity<NumeroRifa> consultarNumero(@PathVariable(value = "numero") Long numero) {
        NumeroRifa numeroRifaConsultar = numeroRifaService.consultarNumero(numero);
        if (numeroRifaConsultar == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.ok(numeroRifaConsultar);
    }

    @PutMapping(value = "/atualizar/{numero}", produces = "application/json")
    public ResponseEntity<String> atualizarNumeroRifa(@PathVariable(value = "numero") Long numero, @RequestBody NumeroRifa numeroRifa) {
        NumeroRifa numeroRifaAtualizado = numeroRifaService.atualizarNumeroRifa(numero, numeroRifa);
        if (numeroRifaAtualizado == null) {
            throw new NotFoundExeption("Número da rifa não encontrado: " + numero);
        }
        String numeroAtualizado = Long.toString(numeroRifaAtualizado.getNumero());
        return ResponseEntity.ok("Cadastro com o número " + numeroAtualizado + " foi atualizado");
    }

    @GetMapping(value = "/todos", produces = "application/json")
    public ResponseEntity<List<NumeroRifa>> buscarTodosNumeros() {
        List<NumeroRifa> numeros = numeroRifaService.buscarTodosNumeros();
        return ResponseEntity.ok(numeros);
    }

    @GetMapping (value = "/buscarNome",produces = "application/json")
    public ResponseEntity<List<NumeroRifa>>buscarNome(@RequestParam String nome) {
        List<NumeroRifa> numeroRifas = numeroRifaService.filterByNome(nome);
        if (numeroRifas.isEmpty()){
            throw new NotFoundExeption( " Nome "+nome+" não existe na base de dados");
        }
        return ResponseEntity.ok(numeroRifas);
    }
}