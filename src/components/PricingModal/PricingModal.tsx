import { Icon } from "../Icons/Icon";
import { Theme } from "../../Theme/theme";
import * as _ from "./styled";

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PricingModal({ isOpen, onClose }: PricingModalProps) {
  if (!isOpen) return null;

  const plans = [
    {
      name: "Basic",
      price: "Free",
      description: "Perfect for getting started",
      features: [
        "Up to 3 projects",
        "Basic analytics",
        "Community support",
        "1GB storage",
      ],
      buttonText: "Current Plan",
      isPopular: false,
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      description: "For professional developers",
      features: [
        "Unlimited projects",
        "Advanced analytics",
        "Priority support",
        "50GB storage",
        "Team collaboration",
        "Custom integrations",
      ],
      buttonText: "Upgrade to Pro",
      isPopular: true,
    },
    {
      name: "Max",
      price: "$99",
      period: "/month",
      description: "For large teams and enterprises",
      features: [
        "Everything in Pro",
        "Dedicated support",
        "Unlimited storage",
        "Advanced security",
        "Custom SLA",
        "On-premise option",
      ],
      buttonText: "Upgrade to Max",
      isPopular: false,
    },
  ];

  return (
    <_.Overlay onClick={onClose}>
      <_.ModalContainer onClick={(e) => e.stopPropagation()}>
        <_.Header>
          <_.Title>Choose Your Plan</_.Title>
          <_.CloseButton onClick={onClose}>
            <Icon size="M" color={Theme.Text.Text_20}>
              close
            </Icon>
          </_.CloseButton>
        </_.Header>

        <_.PlansContainer>
          {plans.map((plan) => (
            <_.PlanCard key={plan.name} isPopular={plan.isPopular}>
              {plan.isPopular && <_.PopularBadge>Most Popular</_.PopularBadge>}

              <_.PlanHeader>
                <_.PlanName>{plan.name}</_.PlanName>
                <_.PriceContainer>
                  <_.Price>{plan.price}</_.Price>
                  {plan.period && <_.Period>{plan.period}</_.Period>}
                </_.PriceContainer>
                <_.Description>{plan.description}</_.Description>
              </_.PlanHeader>

              <_.FeaturesList>
                {plan.features.map((feature, index) => (
                  <_.FeatureItem key={index}>
                    <Icon size="S" color={Theme.Functional.Primary}>
                      check_circle
                    </Icon>
                    <_.FeatureText>{feature}</_.FeatureText>
                  </_.FeatureItem>
                ))}
              </_.FeaturesList>

              <_.UpgradeButton isPopular={plan.isPopular}>
                {plan.buttonText}
              </_.UpgradeButton>
            </_.PlanCard>
          ))}
        </_.PlansContainer>
      </_.ModalContainer>
    </_.Overlay>
  );
}
