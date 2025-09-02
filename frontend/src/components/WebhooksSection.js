import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  Webhook, 
  Clock, 
  CheckCircle, 
  CreditCard,
  ArrowRight,
  Server,
  Zap,
  Globe,
  Shield
} from "lucide-react";

const WebhooksSection = () => {
  const [currentTransaction, setCurrentTransaction] = useState(null);
  const [webhookStatus, setWebhookStatus] = useState('idle');
  const [statusHistory, setStatusHistory] = useState([]);

  const transactionStates = [
    { 
      status: 'PROCESSANDO', 
      color: 'bg-slate-500', 
      textColor: 'text-slate-400',
      description: 'Transação sendo processada pela adquirente',
      duration: 2000 
    },
    { 
      status: 'AUTORIZADO', 
      color: 'bg-blue-500', 
      textColor: 'text-blue-400',
      description: 'Pagamento autorizado, aguardando captura',
      duration: 2500 
    },
    { 
      status: 'PAGO', 
      color: 'bg-emerald-500', 
      textColor: 'text-emerald-400',
      description: 'Pagamento concluído com sucesso',
      duration: 3000 
    }
  ];

  const [currentStateIndex, setCurrentStateIndex] = useState(0);

  useEffect(() => {
    const startNewTransaction = () => {
      const transactionId = `TX${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`;
      setCurrentTransaction({
        id: transactionId,
        amount: 'R$ ' + (Math.random() * 1000 + 50).toFixed(2).replace('.', ','),
        customer: ['João Silva', 'Maria Santos', 'Pedro Costa', 'Ana Oliveira'][Math.floor(Math.random() * 4)],
        method: ['Cartão de Crédito', 'PIX', 'Débito'][Math.floor(Math.random() * 3)],
        timestamp: new Date().toLocaleTimeString()
      });
      
      setCurrentStateIndex(0);
      setStatusHistory([]);
      setWebhookStatus('sending');
    };

    const timer = setInterval(() => {
      if (currentStateIndex < transactionStates.length - 1) {
        // Add current status to history
        setStatusHistory(prev => [...prev, {
          ...transactionStates[currentStateIndex],
          timestamp: new Date().toLocaleTimeString(),
          sent: true
        }]);
        
        setTimeout(() => {
          setCurrentStateIndex(prev => prev + 1);
        }, 500);
      } else if (currentStateIndex === transactionStates.length - 1) {
        // Add final status and complete
        setStatusHistory(prev => [...prev, {
          ...transactionStates[currentStateIndex],
          timestamp: new Date().toLocaleTimeString(),
          sent: true
        }]);
        
        setTimeout(() => {
          setWebhookStatus('completed');
          setTimeout(() => {
            startNewTransaction();
          }, 2000);
        }, 1000);
      }
    }, transactionStates[currentStateIndex]?.duration || 2000);

    // Start first transaction
    if (!currentTransaction) {
      startNewTransaction();
    }

    return () => clearInterval(timer);
  }, [currentStateIndex, currentTransaction]);

  const currentState = transactionStates[currentStateIndex];

  return (
    <section className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Webhooks em Tempo Real</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Receba notificações instantâneas sobre mudanças de status das transações
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Transaction Flow */}
          <div className="space-y-6">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <CreditCard className="w-5 h-5 mr-2 text-emerald-400" />
                  Transação em Andamento
                </CardTitle>
              </CardHeader>
              <CardContent>
                {currentTransaction && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-slate-400 text-sm">ID da Transação</p>
                        <p className="text-white font-semibold">{currentTransaction.id}</p>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">Valor</p>
                        <p className="text-white font-semibold">{currentTransaction.amount}</p>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">Cliente</p>
                        <p className="text-white font-semibold">{currentTransaction.customer}</p>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">Método</p>
                        <p className="text-white font-semibold">{currentTransaction.method}</p>
                      </div>
                    </div>
                    
                    {/* Status Flow */}
                    <div className="pt-4 border-t border-slate-700">
                      <p className="text-slate-400 text-sm mb-3">Status Atual</p>
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${currentState?.color} animate-pulse`}></div>
                        <Badge className={`${currentState?.color} text-white`}>
                          {currentState?.status}
                        </Badge>
                        <span className="text-slate-400 text-sm">{currentState?.description}</span>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Webhook Flow Visualization */}
            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center mb-2 animate-pulse">
                    <Server className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-sm text-slate-400">PayTools</p>
                </div>
                
                <div className="flex-1 relative mx-8">
                  <div className="h-1 bg-slate-700 rounded-full">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full animate-pulse"></div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full animate-ping"></div>
                  </div>
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-emerald-500 text-white text-xs">
                      <Zap className="w-3 h-3 mr-1" />
                      Enviando Webhook
                    </Badge>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-2">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-sm text-slate-400">Sua Aplicação</p>
                </div>
              </div>
            </div>
          </div>

          {/* Webhook History */}
          <div className="space-y-6">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Webhook className="w-5 h-5 mr-2 text-emerald-400" />
                  Histórico de Webhooks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-80 overflow-y-auto">
                  {statusHistory.map((status, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-3 bg-slate-700 rounded-lg animate-slide-in-right"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${status.color}`}>
                          {status.status === 'PROCESSANDO' && <Clock className="w-4 h-4 text-white" />}
                          {status.status === 'AUTORIZADO' && <Shield className="w-4 h-4 text-white" />}
                          {status.status === 'PAGO' && <CheckCircle className="w-4 h-4 text-white" />}
                        </div>
                        <div>
                          <p className="text-white font-medium text-sm">{status.status}</p>
                          <p className="text-slate-400 text-xs">{status.timestamp}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-emerald-500 text-white text-xs">✓ Enviado</Badge>
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Current Status Being Processed */}
                  {currentState && (
                    <div className="flex items-center justify-between p-3 bg-slate-700 rounded-lg border-2 border-emerald-500/50 animate-pulse">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentState.color}`}>
                          {currentState.status === 'PROCESSANDO' && <Clock className="w-4 h-4 text-white animate-spin" />}
                          {currentState.status === 'AUTORIZADO' && <Shield className="w-4 h-4 text-white" />}
                          {currentState.status === 'PAGO' && <CheckCircle className="w-4 h-4 text-white" />}
                        </div>
                        <div>
                          <p className="text-white font-medium text-sm">{currentState.status}</p>
                          <p className="text-slate-400 text-xs">Agora</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-orange-500 text-white text-xs animate-pulse">Enviando...</Badge>
                        <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"></div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Webhook Configuration */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-sm">Exemplo de Configuração</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-900 rounded-lg p-4">
                  <pre className="text-sm text-slate-300 overflow-x-auto">
                    <code>{`{
  "webhook_url": "https://sua-app.com/webhooks/pagamentos",
  "events": [
    "transaction.processing",
    "transaction.authorized", 
    "transaction.paid"
  ],
  "secret": "webhook_secret_key"
}`}</code>
                  </pre>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
                  <div className="text-center p-2 bg-slate-700 rounded">
                    <div className="w-4 h-4 bg-slate-500 rounded-full mx-auto mb-1"></div>
                    <span className="text-slate-400">PROCESSANDO</span>
                  </div>
                  <div className="text-center p-2 bg-slate-700 rounded">
                    <div className="w-4 h-4 bg-blue-500 rounded-full mx-auto mb-1"></div>
                    <span className="text-blue-400">AUTORIZADO</span>
                  </div>
                  <div className="text-center p-2 bg-slate-700 rounded">
                    <div className="w-4 h-4 bg-emerald-500 rounded-full mx-auto mb-1"></div>
                    <span className="text-emerald-400">PAGO</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebhooksSection;