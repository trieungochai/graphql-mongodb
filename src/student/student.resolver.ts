import { Args, Mutation, Resolver, Query } from "@nestjs/graphql";

import { StudentType } from "./student.type";
import { StudentService } from './student.service';
import { CreateStudentInput } from './create-student.input';

@Resolver(of => StudentType)
export class StudentResolver {
  constructor(
    private studentService: StudentService,
  ) {}

  @Query(returns => [StudentType])
  async studenst() {
    return this.studentService.getAllStudents();
  };

  @Mutation(returns => StudentType)
  async createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput
  ) {
    return this.studentService.createStudent(createStudentInput);
  }
} 