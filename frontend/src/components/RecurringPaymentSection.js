import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { 
  Calendar, 
  CreditCard, 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  Play, 
  Pause, 
  X,
  Users,
  DollarSign,
  Clock
} from "lucide-react";

const RecurringPaymentSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [plans, setPlans] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);

  const steps = [
    { title: "Criação do Plano", duration: 4000 },
    { title: "Assinatura do Cliente", duration: 4000 },
    { title: "Gestão de Status", duration: 6000 },
    { title: "Controle Completo", duration: 4000 }
  ];

  const samplePlans = [
    {
      id: "plan_premium",
      name: "Premium Monthly",
      amount: "R$ 99,90",
      interval: "monthly",
      features: ["API Ilimitada", "Suporte 24/7", "Analytics Avançado"]
    },
    {
      id: "plan_enterprise", 
      name: "Enterprise Yearly",
      amount: "R$ 999,00",
      interval: "yearly",
      features: ["Tudo do Premium", "SLA 99.9%", "Manager Dedicado"]
    }
  ];

  const sampleSubscriptions = [
    {
      id: "sub_001",
      customer: "João Silva",
      plan: "Premium Monthly",
      status: "active",
      next_billing: "2024-02-15",
      created: "2024-01-15"
    },
    {
      id: "sub_002", 
      customer: "Maria Santos",
      plan: "Enterprise Yearly",
      status: "past_due",
      next_billing: "2024-02-10",
      created: "2024-01-10"
    },
    {
      id: "sub_003",
      customer: "Pedro Costa", 
      plan: "Premium Monthly",
      status: "canceled",
      next_billing: null,
      created: "2024-01-05"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, steps[currentStep].duration);

    return () => clearTimeout(timer);
  }, [currentStep]);

  useEffect(() => {
    if (currentStep === 0) {
      // Reset animation
      setPlans([]);
      setSubscriptions([]);
      
      // Animate plan creation
      setTimeout(() => setPlans([samplePlans[0]]), 1000);
      setTimeout(() => setPlans([samplePlans[0], samplePlans[1]]), 2000);
    } else if (currentStep === 1) {
      // Animate subscription creation
      setTimeout(() => setSubscriptions([sampleSubscriptions[0]]), 1000);
      setTimeout(() => setSubscriptions([sampleSubscriptions[0], sampleSubscriptions[1]]), 2500);
    } else if (currentStep === 2) {
      // Show status management
      setSubscriptions(sampleSubscriptions);
    } else if (currentStep === 3) {
      // Show full control
      setSubscriptions(sampleSubscriptions);
    }
  }, [currentStep]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-emerald-500';
      case 'past_due': return 'bg-orange-500';
      case 'canceled': return 'bg-red-500';
      default: return 'bg-slate-500';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active': return <CheckCircle className="w-4 h-4" />;
      case 'past_due': return <AlertTriangle className="w-4 h-4" />;
      case 'canceled': return <XCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'active': return 'Ativa';
      case 'past_due': return 'Inadimplente';
      case 'canceled': return 'Cancelada';
      default: return 'Pendente';
    }
  };

  return (
    <section className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Pagamentos Recorrentes</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Crie planos de assinatura e gerencie cobranças automáticas com controle total sobre o ciclo de vida
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            {steps.map((step, index) => (
              <div key={index} className={`flex items-center ${index < steps.length - 1 ? 'flex-1' : ''}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 ${
                  index <= currentStep ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white' : 'bg-slate-700 text-slate-400'
                }`}>
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div className="flex-1 h-1 mx-4 bg-slate-700 rounded">
                    <div className={`h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded transition-all duration-500 ${
                      index < currentStep ? 'w-full' : 'w-0'
                    }`} />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-2">{steps[currentStep].title}</h3>
          </div>
        </div>

        <div className="bg-slate-800 rounded-xl border border-slate-700 p-8 min-h-[400px]">
          {/* Step 0: Plan Creation */}
          {currentStep === 0 && (
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white mb-4">Criando Planos de Assinatura</h4>
              <div className="grid md:grid-cols-2 gap-6">
                {plans.map((plan, index) => (
                  <Card 
                    key={plan.id} 
                    className="bg-slate-700 border-slate-600 animate-slide-in-bottom"
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    <CardHeader>
                      <CardTitle className="text-white flex items-center justify-between">
                        {plan.name}
                        <Badge className="bg-emerald-500">{plan.interval}</Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-emerald-400 mb-4">{plan.amount}</div>
                      <ul className="space-y-2">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-slate-300 text-sm">
                            <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
                {plans.length < 2 && (
                  <div className="flex items-center justify-center border-2 border-dashed border-slate-600 rounded-lg p-8">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center mb-3 mx-auto animate-pulse">
                        <Play className="w-6 h-6 text-slate-400" />
                      </div>
                      <p className="text-slate-400">Criando próximo plano...</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Step 1: Customer Subscription */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white mb-4">Clientes Assinando Planos</h4>
              <div className="space-y-4">
                {subscriptions.map((sub, index) => (
                  <div 
                    key={sub.id}
                    className="flex items-center justify-between p-4 bg-slate-700 rounded-lg animate-slide-in-right"
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">{sub.customer}</div>
                        <div className="text-slate-400 text-sm">{sub.plan}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-emerald-500 mb-2">Nova Assinatura</Badge>
                      <div className="text-slate-400 text-sm">Próxima cobrança: {sub.next_billing}</div>
                    </div>
                  </div>
                ))}
                {subscriptions.length < 2 && (
                  <div className="flex items-center justify-center border-2 border-dashed border-slate-600 rounded-lg p-6">
                    <div className="text-center">
                      <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center mb-2 mx-auto animate-spin">
                        <Clock className="w-4 h-4 text-slate-400" />
                      </div>
                      <p className="text-slate-400 text-sm">Aguardando nova assinatura...</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Step 2: Status Management */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white mb-4">Gestão de Status das Assinaturas</h4>
              <div className="space-y-4">
                {subscriptions.map((sub, index) => (
                  <div 
                    key={sub.id}
                    className="p-4 bg-slate-700 rounded-lg border-l-4"
                    style={{ borderLeftColor: sub.status === 'active' ? '#10b981' : sub.status === 'past_due' ? '#f59e0b' : '#ef4444' }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${getStatusColor(sub.status)}`}>
                          {getStatusIcon(sub.status)}
                        </div>
                        <div>
                          <div className="text-white font-semibold">{sub.customer}</div>
                          <div className="text-slate-400 text-sm">{sub.plan}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className={`${getStatusColor(sub.status)} text-white mb-2`}>
                          {getStatusText(sub.status)}
                        </Badge>
                        <div className="text-slate-400 text-sm">
                          {sub.next_billing ? `Próxima: ${sub.next_billing}` : 'Cancelada'}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Full Control */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white mb-4">Controle Completo das Assinaturas</h4>
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h5 className="text-white font-medium">Ações Disponíveis</h5>
                  {subscriptions.map((sub, index) => (
                    <div key={sub.id} className="p-4 bg-slate-700 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-white font-semibold">{sub.customer}</div>
                        <Badge className={`${getStatusColor(sub.status)} text-white`}>
                          {getStatusText(sub.status)}
                        </Badge>
                      </div>
                      <div className="flex space-x-2">
                        {sub.status === 'active' && (
                          <>
                            <Button size="sm" variant="outline" className="border-slate-600 text-slate-300">
                              <Pause className="w-3 h-3 mr-1" />
                              Pausar
                            </Button>
                            <Button size="sm" variant="outline" className="border-red-600 text-red-400">
                              <X className="w-3 h-3 mr-1" />
                              Cancelar
                            </Button>
                          </>
                        )}
                        {sub.status === 'past_due' && (
                          <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600">
                            <CreditCard className="w-3 h-3 mr-1" />
                            Cobrar Novamente
                          </Button>
                        )}
                        {sub.status === 'canceled' && (
                          <Button size="sm" className="bg-cyan-500 hover:bg-cyan-600">
                            <Play className="w-3 h-3 mr-1" />
                            Reativar
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-slate-900 rounded-lg p-6">
                  <h5 className="text-white font-medium mb-4">Métricas em Tempo Real</h5>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Assinaturas Ativas</span>
                      <span className="text-emerald-400 font-bold">1</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Inadimplentes</span>
                      <span className="text-orange-400 font-bold">1</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Canceladas</span>
                      <span className="text-red-400 font-bold">1</span>
                    </div>
                    <div className="border-t border-slate-700 pt-4">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">MRR (Receita Mensal)</span>
                        <span className="text-emerald-400 font-bold text-lg">R$ 99,90</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RecurringPaymentSection;