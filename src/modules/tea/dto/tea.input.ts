import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class TeaInput{
    @Field()
    readonly name:string;

    @Field({nullable:true})
    readonly category:string;
    
    @Field({nullable:true})
    readonly origin:string;

    @Field({nullable:true})
    readonly description:string;
}
