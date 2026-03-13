import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Panel } from './entities/paneles.entity';
import { Repository } from 'typeorm';
import { PanelEscaneado } from './barcode-reader.controller';

@Injectable()
export class BarcodeReaderService {

    constructor(
        @InjectRepository(Panel)
        private panelesRepository: Repository<Panel>
    ) { }

    async createPanel(params: PanelEscaneado): Promise<void> {
        const panel = this.panelesRepository.create({ panel: params.panel, tracker: params.tracker });
        await this.panelesRepository.save(panel);
    };
};
