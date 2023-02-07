import { Body, Controller,Delete,Get,Param,Patch,Post,Put,Query,Req } from '@nestjs/common';
import { Request } from 'express';
import { ITareaDTO } from './dto/tarea.dto';
import { TareasService } from './tareas.service';
import{v4 as uuid} from 'uuid';


@Controller('api/v1/tareas')
export class TareasController {

    constructor(private readonly NombreTareasServicios:TareasService){}
    @Post()
    Insertar(@Body() Vnombre: ITareaDTO){
        return this.NombreTareasServicios.Insertar(Vnombre);
    }

    @Get()
    Todos(){
        return this.NombreTareasServicios.Todos();
    }

    @Put(':id')
    Actualizar(@Param('id') id:string, @Body() cuerpo:ITareaDTO){
        return this.NombreTareasServicios.Actualizar(id,cuerpo);
    }

    @Delete(':id')
    Eliminar(@Param('id')id:string){
        return this.NombreTareasServicios.Eliminar(id);
    }
    /*
    @Get(':id')
    Uno(@Param('id')id:string){
        return this.NombreTareasServicios.Uno(id);
    }
    */


    /* Select * from tareas where id =??*/
    // @Get(':id')
    // public name(@Param('id') id:string){
    //     var reg = parseInt(id) +12;
    //     return {reg};
    // }
    /* OBTENER DATOS MEDIANTE RUTAS*/
    // @Post(':id/descripcion/:descripcion/isDone/:isDone')
    // method(@Param('id')id:string,
    // @Param('descripcion') descripcion:string,
    // @Param('isDone') isDone:boolean
    // ){
    //     return{id,descripcion,isDone};

    /*OBTENER DATOS MEDIANTE DATOS DEL LINK*/
    // }
    // @Post()
    // method(
    //     @Query('id') id:string,
    //     @Query('descripcion') descripcion:string,
    //     @Query('isDone') isDone:boolean,
    // ){
    //     return{id,descripcion,isDone};

    // }
    
    /* */ 
    // @Post()
    // method(@Body() variables:any){
    //     return {variables};
    // }
    
    
    
}