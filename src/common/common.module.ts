import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AxiosAdapter } from './adapter/axios.adapter';

@Module({
  imports: [HttpModule],
  providers: [AxiosAdapter],
  exports: [AxiosAdapter]
})
export class CommonModule {}
