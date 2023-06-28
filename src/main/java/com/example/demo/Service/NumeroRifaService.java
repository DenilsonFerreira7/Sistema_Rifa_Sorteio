package com.example.demo.Service;
import com.example.demo.Exceptions.NotFoundExeption;
import com.example.demo.Models.NumeroRifa;
import com.example.demo.Repository.NumeroRifaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Random;

@Service
@RequiredArgsConstructor


public class NumeroRifaService {
    @Autowired
    private final NumeroRifaRepository numeroRifaRepository;


    // salvar Participante
    public NumeroRifa salvarNumeroRifa(NumeroRifa numeroRifa) {
        return numeroRifaRepository.save(numeroRifa);
    }

    //deletar participante
    public NumeroRifa deletarNumeroRifa(Long numero) {
        NumeroRifa numeroRifaDeletado = numeroRifaRepository.findByNumero(numero);
        if (numeroRifaDeletado == null) {
            throw new NotFoundExeption("O NUMERO " + numero + " NÃO FOI PREENCHIDO PARA SER DELETADO");
        }
        numeroRifaRepository.delete(numeroRifaDeletado);
        return numeroRifaDeletado;
    }

    //consultar numero
    public NumeroRifa consultarNumero(Long numero) {
        return numeroRifaRepository.findByNumero(numero);
    }


    // Buscar um número (ID) aleatório no banco de dados
    public NumeroRifa buscarNumeroAleatorio() {
        List<NumeroRifa> todasRifas = (List<NumeroRifa>) numeroRifaRepository.findAll();
        int totalRifas = todasRifas.size();
        if (totalRifas > 0) {
            Random random = new Random();
            int indiceAleatorio = random.nextInt(totalRifas);
            return todasRifas.get(indiceAleatorio);
        }
        return null;
    }

    //Atualizar dados
    public NumeroRifa atualizarNumeroRifa(Long numero, NumeroRifa numeroRifa) {
        NumeroRifa numeroRifaExistente = numeroRifaRepository.findByNumero(numero);
        if (numeroRifaExistente == null) {
            return null;
        }
        numeroRifaExistente.setNome(numeroRifa.getNome());
        numeroRifaExistente.setTelefone(numeroRifa.getTelefone());
        numeroRifaExistente.setValor(numeroRifa.getValor());
        return numeroRifaRepository.save(numeroRifaExistente);
    }
    //Listar Todos
    public List<NumeroRifa> buscarTodosNumeros() {
        return (List<NumeroRifa>) numeroRifaRepository.findAll();
    }


    public List <NumeroRifa> filterByNome (String nome) {
        return  numeroRifaRepository.findByNomeFilter(nome);
    }
}
