import React from 'react';
import { Table, Button, Space, Typography, message } from 'antd';
import { CopyOutlined, BankOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { Colors } from '../../utils/utils.colors';

const { Text } = Typography;

const paymentData: InfoPaiement[] = [
    {
        key: '1',
        typeFrais: 'Frais Académiques',
        banque: 'EQUITY BANK CONGO',
        compte: '00018000280003722120002',
        note: "Compte général de l'ULPGL"
    },
    {
        key: '2',
        typeFrais: 'Frais de Stage et de Jury',
        banque: 'EQUITY BANK CONGO',
        compte: '00018000028200000083966',
        note: 'Exclusif Faculté de Médecine'
    },
    {
        key: '3',
        typeFrais: 'Frais de Stage et de Jury',
        banque: 'LA BONNE MOISSON',
        compte: 'Compte N°187',
        note: 'Exclusif Faculté de Médecine (Alternative)'
    },
    {
        key: '4',
        typeFrais: 'Logement au Home (La Pépinière)',
        banque: 'TMB',
        compte: '00017-28000-23461000001-32',
        note: 'Montant : 350 $US'
    },
    {
        key: '5',
        typeFrais: 'Logement au Home (La Pépinière)',
        banque: 'ACCESS BANK',
        compte: '21964589601',
        note: 'Montant : 350 $US'
    }
];

export const Paymenentinfos: React.FC = () => {

    const handleCopy = (accountNumber: string, bankName: string) => {
        const cleanNumber = accountNumber.replace('Compte ', '');
        navigator.clipboard.writeText(cleanNumber);
        message.success(`Compte ${bankName} copié dans le presse-papier !`);
    };

    const columns: ColumnsType<InfoPaiement> = [
        {
            title: 'Type de Frais',
            dataIndex: 'typeFrais',
            key: 'typeFrais',
            onCell: (_, index) => {
                if (index === 1) return { rowSpan: 2 };
                if (index === 2) return { rowSpan: 0 };
                if (index === 3) return { rowSpan: 2 };
                if (index === 4) return { rowSpan: 0 };
                return { rowSpan: 1 };
            },
            render: (text) => <strong>{text}</strong>,
        },
        {
            title: 'Institution Bancaire',
            dataIndex: 'banque',
            key: 'banque',
        },
        {
            title: 'Numéro de Compte',
            dataIndex: 'compte',
            key: 'compte',
            render: (text, record) => (
                <Space style={{ width: '100%', justifyContent: 'space-between' }}>
                    <Text code style={{ fontSize: '13px' }}>{text}</Text>
                    <Button
                        type="text"
                        size="small"
                        icon={<CopyOutlined style={{ color: Colors.primaryColor }} />}
                        onClick={() => handleCopy(text, record.banque)}
                    />
                </Space>
            ),
        },
        {
            title: 'Précisions / Notes',
            dataIndex: 'note',
            key: 'note',
            render: (text) => <Text type="secondary">{text}</Text>,
        },
    ];

    return (
        <div style={{ marginTop: '32px', width: '100%' }}>
            <Table
                columns={columns}
                dataSource={paymentData}
                pagination={false}
                bordered
                size="middle"
                style={{ width: '100%' }}
                scroll={{ x: 'max-content' }}
                components={{
                    header: {
                        cell: (props: any) => (
                            <th
                                {...props}
                                style={{
                                    ...props.style,
                                    backgroundColor: Colors.primaryColor,
                                    color: Colors.whiteColor,
                                }}
                            />
                        ),
                    },
                }}
            />
        </div>
    );
}