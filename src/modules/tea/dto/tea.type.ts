import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TeaType{
    
    @Field(type=>Int)
    readonly id:number;

    @Field()
    readonly name:string;

    @Field({nullable:true})
    readonly category:string;
    
    @Field({nullable:true})
    readonly origin:string;

    @Field({nullable:true})
    readonly description:string;
}
